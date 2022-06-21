import React, { Component } from 'react';


class TrenerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            treneri: props.treneri
        }
    }

    render() {
        return (
            <div>
                <div class="profile-card">
                    <div class="profile-card-header">
                        <div class="profile-image"></div>

                        <div class="profile-info">
                            <h3 class="profile-name">Dev Ed</h3>
                            <p class="profile-desc">Developer/Conent Creator</p>
                        </div>
                    </div>

                    <div class="profile-card-body">
                        <ul class="status">
                            <li>
                                <span class="status-value">532</span>
                                <span class="status-text">Posts</span>
                            </li>

                            <li>
                                <span class="status-value">1.5m</span>
                                <span class="status-text">Followers</span>
                            </li>

                            <li>
                                <span class="status-value">423</span>
                                <span class="status-text">Following</span>
                            </li>
                        </ul>

                        <div class="action">
                            <button class="btn btn-pink">Follow</button>
                            <button class="btn btn-gray-outline">Message</button>
                        </div>
                    </div>
                </div>
                {
                    this.state.treneri.map(
                        trener =>
                            <h1>{trener.ime}</h1>
                    )
                }
            </div>
        );
    }
}

export default TrenerComponent;