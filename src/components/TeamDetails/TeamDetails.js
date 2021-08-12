import React from "react";
import { Link } from "react-router-dom";

import "./TeamDetails.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TeamDetails = (props) => {
  const { idTeam, strSport, strTeam, strTeamBadge } = props.teamData;
  return (
    <div>
      <div className="container">
        <CardGroup className="container-element">
          <Card
            className="card-element"
            style={{ width: "16rem", height: "14rem" }}
          >
            <Card.Img
              className="card-image"
              style={{ width: "4.5rem" }}
              variant="top"
              src={strTeamBadge}
            />
            <Card.Body>
              <Card.Title>{strTeam}</Card.Title>
              <Card.Text>Sports type: {strSport}</Card.Text>

              <Link to={`/teamInfo/${idTeam}`}>
                <Button variant="primary">
                  Explore
                  <FontAwesomeIcon
                    className="button"
                    icon={(fas, faArrowRight)}
                  />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default TeamDetails;
