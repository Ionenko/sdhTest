import React from 'react';
import Header from "../components/Header";
import Container from "@material-ui/core/Container";

const BaseLayout = (props) => {
    return (
        <div>
            <Header/>
            <main>
                <div className="content">
                    <Container>
                        {
                            props.children
                        }
                    </Container>
                </div>
            </main>
        </div>
    );
};

export default BaseLayout;