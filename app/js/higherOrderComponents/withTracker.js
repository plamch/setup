import React from 'react'

export const withTracker = WrappedComponent => props => {
    // eslint-disable-next-line react/prop-types
    // window.gtag('event', 'pageview', props.location.pathname)

    return <WrappedComponent {...props} />
}
