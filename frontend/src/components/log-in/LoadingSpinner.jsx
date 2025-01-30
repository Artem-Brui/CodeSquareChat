import "../../scss/_loading-spinner.scss"

export const LoadingSpinner = () => {
    return (
        <div className="svg-icon">
            <div className="loading-spinner">
                <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
            </div>
        </div>
    )
}

