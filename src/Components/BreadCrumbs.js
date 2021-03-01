import React, { Component } from 'react';
import {
    Breadcrumb
} from 'react-bootstrap';

import '../CSS/CardNav.css';

class BreadCrumbs extends Component {
    render() {
        return (
            <div className="BreadCrumbs">
                <Breadcrumb>
                    {
                        this.props.parts.map(segment => {
                            if (segment.link) {
                                return (<Breadcrumb.Item href={segment.link} key={segment.link}>{segment.title}</Breadcrumb.Item>);
                            }
                            else {
                                return (<Breadcrumb.Item active key={segment.link}>{segment.title}</Breadcrumb.Item>);

                            }
                        })
                    }
                </Breadcrumb>
            </div>
        )
    }
}
export default BreadCrumbs;

