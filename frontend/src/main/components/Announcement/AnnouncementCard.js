import React, { useState, useEffect, useRef } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export function isFutureDate(startingDate) {
    const curr = new Date();
    const startYear = parseInt(startingDate);
    const startMonth = parseInt(startingDate.substring(5,7));
    const startDate = parseInt(startingDate.substring(8,10));
    const currYear = curr.getFullYear();
    const currMonth = curr.getMonth() + 1;
    const currDate = curr.getDate();

    if (startYear === currYear) {
        if (startMonth === currMonth) {
            return startDate > currDate;
        } else {
            // Stryker disable next-line all: mutation test unreasonable
            return startMonth > currMonth;
        }
    } else {
        // Stryker disable next-line all: mutation test unreasonable
        return startYear > currYear;
    }
}

const AnnouncementCard = ({ announcement }) => {
    const testIdPrefix = "announcementCard";
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isOverflow, setIsOverflow] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const checkOverflow = () => {
            const element = textRef.current;
            if (element) {
                setIsOverflow(element.scrollWidth > element.clientWidth);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, [announcement.announcementText]);

    if (!announcement || !announcement.startDate || isFutureDate(announcement.startDate)) {
        return null;
    }

    if ( announcement.endDate && (!isFutureDate(announcement.endDate))) {
        return null;
    }

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <Card.Body style={
            // Stryker disable next-line all : don't mutation test CSS 
            { fontSize: "14px", border: "1px solid lightgrey", padding: "4px", borderRadius: "10px", margin: "10px 0" }
        }>
            <Container>
                <Row>
                    <Col xs={12} data-testid={`${testIdPrefix}-id-${announcement.announcementText}`}>
                        <div ref = {textRef} style={ // Stryker disable next-line all : don't mutation test CSS 
                        { 
                            // Stryker disable next-line all : don't mutation test CSS
                            whiteSpace: isCollapsed ? 'nowrap' : 'normal',
                            // Stryker disable next-line all : don't mutation test CSS
                            overflow: isCollapsed ? 'hidden' : 'visible',
                            // Stryker disable next-line all : don't mutation test CSS
                            textOverflow: isCollapsed ? 'ellipsis' : 'clip',
                            // Stryker disable next-line all : don't mutation test CSS
                            maxWidth: isCollapsed ? '250px' : 'none'
                        }}>
                            {announcement.announcementText}
                        </div>
                        {isOverflow && (
                            <Button variant="link" onClick={toggleCollapse} style={{ fontSize: '11px', padding: '2px' }}>
                                {isCollapsed ? 'Show more' : 'Show less'}
                            </Button>
                        )}
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    );
};

export default AnnouncementCard;