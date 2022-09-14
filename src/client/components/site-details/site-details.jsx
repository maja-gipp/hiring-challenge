import React from "react";
import { connect } from "react-redux";
import { Card, Heading, Column, List, Row, Spinner } from "~gui-library";
import { sitesLoaded } from "~store/entities/sites/sites";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const SiteDetails = ({ siteId, list, loading, sitesLoaded }) => {
  console.log(list);
  let history = useHistory();
  const site = list.find((site) => site.id === siteId);
  const oilRigs =
    site?.oilRigs.map((oilRigId) => {
      return {
        id: oilRigId,
        name: oilRigId,
        details: oilRigId,
      };
    }) ?? [];
  useEffect(() => {
    sitesLoaded();
  }, []);
  return (
    <Card
      heading={
        <Heading>Site details {loading && <Spinner dark tiny />}</Heading>
      }
    >
      <Row>
        <Column>
          <h1>{site?.name}</h1>
          <p>{site?.country}</p>
          <List
            list={{
              items: oilRigs,
            }}
            noHeader
          />
        </Column>
      </Row>
    </Card>
  );
};

const mapStateToProps = ({ entities }) => {
  const { sites } = entities;
  return {
    loading: sites.loading,
    list: sites.list,
  };
};

const mapDispatchToProps = {
  sitesLoaded,
};

const ConnectedSiteDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteDetails);
export { ConnectedSiteDetails as SiteDetails };
