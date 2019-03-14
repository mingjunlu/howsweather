import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import IconWrapper from './shared/IconWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Error from './shared/Error'
import getPosition from '../utils/getPosition'
import searchLocation from '../utils/searchLocation'
import * as locations from '../utils/locations.json'

class SearchModal extends React.Component {
    state = {
        isRedirecting: false,
        failedToLocate: false,
        isLocating: false,
        keyword: '',
        coords: ''
    }
    handleEscape = (event) => {
        if (!event.target.id && event.key === 'Escape') {
            this.props.handleCloseModal()
        }
    }
    handleInput = (event) => {
        this.setState({ keyword: event.target.value })
    }
    handleGetPosition = async () => {
        this.setState({ isLocating: true })
        // 先用 Geolocation API 定位
        try {
            const coords = await getPosition({ enableHighAccuracy: true })
            this.setState({ isRedirecting: true, isLocating: false, coords })
        } catch(err) {
            console.log(err.message)
            // 失敗的話再用 IP 推估約略位置
            try {
                const resp = await axios.get('https://ipapi.co/json/')
                const { data: { latitude, longitude } } = resp
                const coordinates = `${latitude},${longitude}`
                this.setState({ isRedirecting: true, isLocating: false, coords: coordinates })
            } catch(error) {
                console.log(error)
                this.setState({ failedToLocate: true, isLocating: false })
            }
        }
    }
    render() {
        const { isRedirecting, failedToLocate, isLocating, keyword, coords } = this.state
        const { isOpen, handleCloseModal } = this.props
        const newKeyword = keyword.trim().replace(/台/g, '臺')
        const matches = searchLocation(newKeyword, locations.default)
        if (failedToLocate) { return <Error message="定位失敗" /> }
        else if (isRedirecting) { return <Redirect to={{ pathname: '/', state: { coords } }} /> }
        else if (isOpen) {
            return (
                <Fragment>
                    {isLocating && (
                        <div className="search-modal__top-overlay">
                            <FontAwesomeIcon icon="compass" className="top-overlay__icon" />
                        </div>
                    )}
                    <div
                        tabIndex="0"
                        className="search-modal__overlay animated fadeIn fast"
                        onKeyDown={this.handleEscape}
                    >
                        <div className="search-modal__container">
                            <button
                                type="button"
                                className="search-modal__button"
                                onClick={handleCloseModal}
                            >
                                <IconWrapper icon="angle-left" style={{ fontSize: '2.0rem' }} />
                            </button>
                            <label className="search-modal__searchbar">
                                <input
                                    id="location-input"
                                    className="search-modal__input"
                                    type="text"
                                    placeholder="搜尋"
                                    autoComplete="off"
                                    autoFocus
                                    value={keyword}
                                    onChange={this.handleInput}
                                />
                            </label>
                            <button
                                type="button"
                                className="search-modal__button search-modal__button--highlighted"
                                onClick={this.handleGetPosition}
                            >
                                <IconWrapper icon="location-arrow" style={{ fontSize: '1.4rem' }} />
                            </button>
                        </div>
                        {newKeyword && matches.map(loc => (
                            <Link
                                key={loc.coords}
                                to={{
                                    pathname: loc.path,
                                    state: { coords: loc.coords }
                                }}
                                className="search-modal__matched"
                            >
                                <IconWrapper icon="map-marker-alt" className="matched__icon" />
                                <div style={{ display: 'inline' }}>
                                    {loc.name.split('').map(word => (
                                        <span
                                            key={`${word}-${loc.name}-${Math.random()}`}
                                            className={newKeyword.includes(word)
                                                ? 'matched__highlighted-word'
                                                : undefined
                                            }
                                        >
                                            {word === '臺' && keyword.includes('台') ? '台' : word}
                                        </span>
                                    ))}
                                </div>
                                <div style={{ marginLeft: '0.8em', display: 'inline' }}>
                                    {loc.address}
                                </div>
                            </Link>
                        ))}
                        {newKeyword && matches.length < 1 && (
                            <div className="search-modal__matched search-modal__matched--delayed">
                                <IconWrapper
                                    icon="map-marker-alt"
                                    className="matched__icon"
                                    style={{ visibility: 'hidden' }}
                                />
                                <span>查無結果</span>
                            </div>
                        )}
                    </div>
                </Fragment>
            )
        }
    }
}

export default SearchModal
