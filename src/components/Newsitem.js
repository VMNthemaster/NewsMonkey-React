import React, { Component } from 'react'

export class Newsitem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-2'>
                <div className="card" >
                        <div style={{display: "flex", justifyContent: "flex-end", position: "absolute", right: "0"}}>
                        <span className="badge rounded-pill bg-danger" >{source}
                        </span>
                        </div>
                    <img src={imageUrl !== null ? imageUrl : "https://image.shutterstock.com/image-vector/default-avatar-profile-icon-social-260nw-1677509740.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{title}...
                            {source}
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author !== null ? author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Newsitem
