import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Heading, Column, List, Row, Spinner } from "~gui-library";
import { sitesLoaded } from "~store/entities/sites/sites";
import { useHistory } from "react-router-dom";

const Sites = ({ list, loading, sitesLoaded }) => {
  console.log(list);
  let history = useHistory();
  const items = list.map((site) => {
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

const ConnectedSites = connect(mapStateToProps, mapDispatchToProps)(Sites);
export { ConnectedSites as Sites };
