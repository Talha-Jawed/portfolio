import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import "./Style.css";

class GithubRepoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: null,
            repoName: ['react-native-swipe-image', 'Solution-app', 'smarterWayToLearnPython', 'GraphQL-with-MongooDB-Authentication', 'socket-io', 'dotfiles']
        };
    }

    componentDidMount() {
        const { repoName } = this.state;
        var list = [];
        const url = 'https://api.github.com/users/Talha-Jawed/repos'
        fetch(url, {
            method: 'GET',

        }).then((response) => {
            response.json().then((res) => {
                res.map((item) => {
                    if (repoName.indexOf(item.name) > -1) {
                        list.push(item)
                    }
                })
                if (list && list.length - 1) {
                    this.setState({ repo: list })
                }
            })
        })
    }

    handleClick(url) {
        var win = window.open(url, "_blank");
        win.focus();
    }

    render() {
        const { repo } = this.state
        return (
            <Spring
                from={{ opacity: 0, marginBottom: -500 }}
                to={{ opacity: 1, marginBottom: 0 }}
            >{props => (

                <div className='repo' style={props}>
                    <p className='projectHeading'>Open Source Projects</p>
                    <div className='repoMain'>
                        {
                            repo && repo.map((item, index) => {

                                return (

                                    < div className="repo-card-div" key={index} onClick={() => this.handleClick(item.html_url)}>
                                        <div className="repo-name-div">
                                            <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 12 16" width="12" className="repo-svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                                                ></path>
                                            </svg>
                                            <p className="repo-name">{item.full_name}</p>
                                        </div>
                                        <p>{item.description}</p>
                                        <div className="repo-stats">
                                            <div className="repo-left-stat">
                                                <span>
                                                    {/* <div className="language-color" style={{ backgroundColor: 'red' }}></div> */}
                                                    <p>{item.language}</p>
                                                </span>
                                                <span>
                                                    <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 10 16" width="10" fill="rgb(106, 115, 125)" className="repo-star-svg">
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                                                        ></path>
                                                    </svg>
                                                    <p>{item.forks_count}</p>
                                                </span>
                                                <span>
                                                    <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 14 16" width="14" fill="rgb(106, 115, 125)" className="repo-star-svg">
                                                        <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                                                    </svg>
                                                    <p>{item.stargazers_count}</p>
                                                </span>
                                            </div>
                                            <div className="repo-right-stat">
                                                <p>{item.size} KB</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='gitDiv'>
                        <p className='gitBtn' onClick={() => this.handleClick('https://github.com/Talha-Jawed')}>MORE PROJECTS</p>
                    </div>
                </div>
            )}</Spring>
        );
    }
}

export default GithubRepoCard;