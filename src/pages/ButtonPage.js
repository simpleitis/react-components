import React from 'react';
import Button from '../components/Button';
import { SiHellofresh } from 'react-icons/si';
import { CgHello } from 'react-icons/cg';
import { AiFillWarning } from 'react-icons/ai';
import { MdDangerous } from 'react-icons/md';
import { BiHappyBeaming } from 'react-icons/bi';

function ButtonPage() {
    const handleClick = () => {
    };

    return (
        <div>
            <div>
                <Button className="mb-10" primary onClick={handleClick}>
                    <SiHellofresh />
                    Click
                </Button>
            </div>
            <div>
                <Button secondary>
                    <CgHello />
                    Primary click
                </Button>
            </div>
            <div>
                <Button warning>
                    <AiFillWarning />
                    Secondary click
                </Button>
            </div>
            <div>
                <Button danger>
                    <MdDangerous />
                    Third click
                </Button>
            </div>
            <div>
                <Button success>
                    <BiHappyBeaming />
                    Fourth click
                </Button>
            </div>
            <div>
                <Button primary rounded outline>
                    Fifth click
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
