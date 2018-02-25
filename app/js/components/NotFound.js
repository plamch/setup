import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => (
    <div className="container" style={{ fontFamily: 'monospace' }}>
        <h1 className="not-found">
            <div>░░░404░░░░░▄▄▄▄░░░│▗▝ ▞ ▝ ˄---˄</div>
            <div>░not found░░░▄▄▄▄░░~│ ▞ ▞ ❬.◕‿‿◕.❭’</div>
            <div>░░░:(░░░░░▄▄▄▄░░░░░ `w-w---- w w</div>
            <div>The page you requested was not found.</div>
            <div>You can use the main navigation</div>
            <div>
                or go back to the <Link to="/">Homepage</Link>
            </div>
        </h1>
    </div>
)
