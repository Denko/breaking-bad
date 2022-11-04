import React from 'react'

const Quote = ({ quote }) => {
    return (
        <p>
            {quote.text} <br />
            <span>- {quote.author} -</span> <br />
            <span>{quote.series}</span>
        </p>
    )
}

export default Quote