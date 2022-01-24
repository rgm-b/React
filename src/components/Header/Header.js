import s from './Header.module.css'
import {Col, Row} from "react-bootstrap";

function Header(){
    return(
        <Row>
            <Col>
                <div className={s.title}>Список важных дел</div>
            </Col>
        </Row>
    )
}

export default Header;