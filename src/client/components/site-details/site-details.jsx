import React from "react";
import { connect } from "react-redux";
import { Card, Heading, Column, List, Row, Spinner } from "~gui-library";
import { sitesLoaded } from "~store/entities/sites/sites";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const SiteDetails = ({ siteId, list, loading, sitesLoaded }) => {
  console.log(list);
  let history = useHistory();
  const items = list
    .filter((site) => site.id === siteId)
    .map((site) => {
      return {
        id: site.id,
        name: site.name,
        details: site.country,
        onClick: () => {
          console.log(site.id);
          history.push(`/sites/${site.id}`);
        },
      };
    });
  useEffect(() => {
    sitesLoaded();
  }, []);
  return (
    <Card
      heading={
        <Heading>List of oil sites {loading && <Spinner dark tiny />}</Heading>
      }
    >
      <Row>
        <Column>
          <List
            list={{
              items,
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
