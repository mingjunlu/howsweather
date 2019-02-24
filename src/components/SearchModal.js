import React from 'react'
import IconWrapper from './shared/IconWrapper'
import { cityList } from '../functions/helper'

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
        return isOpen && (
            <div
                tabIndex="0"
                className="search-modal__overlay"
                onKeyDown={this.handleEscape}
            >
                <div className="search-modal__container">
                    <label className="search-modal__searchbar">
                        <IconWrapper
                            icon="search"
                            className="search-modal__icon"
                        />
                        <input
                            id="city-input"
                            className="search-modal__input"
                            type="search"
                            placeholder="搜尋"
                            autoComplete="off"
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
                {keyword && cityList.map(city => {
                    const newKeyword = keyword.replace(/台/g, '臺')
                    return city.includes(newKeyword) ? (
                        <div
                            key={city}
                            className="search-modal__matched"
                        >
                            <IconWrapper
                                icon="search"
                                className={'search-modal__icon' +
                                    ' search-modal__icon--small'
                                }
                            />
                            {city.split('').map(word => (
                                <span
                                    key={word}
                                    className={newKeyword.includes(word) ?
                                        'search-modal__highlighted-word' :
                                        undefined
                                    }
                                >
                                    {word === '臺' && keyword.includes('台') ?
                                        word.replace(/臺/g, '台') :
                                        word
                                    }
                                </span>
                            ))}
                        </div>
                    ) : null
                })}
            </div>
        )
    }
}

export default SearchModal
