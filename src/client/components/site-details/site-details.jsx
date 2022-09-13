import React from "react";
import { connect } from "react-redux";
import { Button, Card, Heading, Column, List, Row } from "~gui-library";
import { sitesLoaded } from "~store/entities/sites/sites";
import styles from "./site-details.module.less";
import { useHistory } from "react-router-dom";

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
  return (
    <Card heading={<Heading>List of oil sites {siteId}</Heading>}>
      <Row>
        <Column width={200}>
          <Button
            label="Load sites"
            onClick={sitesLoaded}
            loading={loading}
            disabled={loading}
          />
        </Column>
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
