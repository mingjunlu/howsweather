import React from 'react'
import { Link } from 'react-router-dom'
import IconWrapper from './shared/IconWrapper'
import * as locations from '../utils/locations.json'

class SearchModal extends React.Component {
    state = {
        keyword: ''
    }
    handleEscape = (event) => {
        if (!event.target.id && event.key === 'Escape') {
            this.props.handleCloseModal()
        }
    }
    handleInput = (event) => {
        this.setState({ keyword: event.target.value })
    }
    render() {
        const { keyword } = this.state
        const { isOpen, handleCloseModal } = this.props
        const newKeyword = keyword.trim().replace(/台/g, '臺')
        const matches = newKeyword
            ? locations.default.filter(loc => loc.name.includes(newKeyword))
            : []
        return isOpen && (
            <div
                tabIndex="0"
                className="search-modal__overlay animated fadeIn fast"
                onKeyDown={this.handleEscape}
            >
                <div className="search-modal__container">
                    <label className="search-modal__searchbar">
                        <IconWrapper icon="search" className="search-modal__icon" />
                        <input
                            id="location-input"
                            className="search-modal__input"
                            type="search"
                            placeholder="搜尋"
                            autoComplete="off"
                            autoFocus
                            value={keyword}
                            onChange={this.handleInput}
                        />
                    </label>
                    <button
                        type="button"
                        className="search-modal__cancel"
                        onClick={handleCloseModal}
                    >
                        取消
                    </button>
                </div>
                {newKeyword && matches.map(loc => (
                    <Link
                        key={loc.coords}
                        to={loc.path}
                        className="search-modal__matched"
                    >
                        <IconWrapper
                            icon="map-marker-alt"
                            className="search-modal__icon search-modal__icon--small"
                        />
                        <div style={{ display: 'inline' }}>
                            {loc.name.split('').map(word => (
                                <span
                                    key={word}
                                    className={newKeyword.includes(word)
                                        ? 'search-modal__highlighted-word'
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
                    <div className="search-modal__matched">
                        <IconWrapper
                            icon="map-marker-alt"
                            className="search-modal__icon search-modal__icon--small"
                            style={{ visibility: 'hidden' }}
                        />
                        <span>查無結果</span>
                    </div>
                )}
            </div>
        )
    }
}

export default SearchModal
