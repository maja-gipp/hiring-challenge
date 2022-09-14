import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Heading, Column, Row, List, Spinner } from "~gui-library";
import { oilRigsLoaded } from "~store/entities/oil-rigs/oil-rigs";

const OilRigs = ({ list, loading, oilRigsLoaded }) => {
  const items = list.map((oilRigs) => {
    return {
      id: oilRigs.id,
      name: oilRigs.name,
      details: oilRigs.country,
    };
  });
  useEffect(() => {
    oilRigsLoaded();
  }, []);
  return (
    <Card
      heading={
        <Heading>List of oil rigs {loading && <Spinner dark tiny />}</Heading>
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
  const { oilRigs } = entities;
  return {
    loading: oilRigs.loading,
    list: oilRigs.list,
  };
};

const mapDispatchToProps = {
  oilRigsLoaded,
};

const ConnectedOilRigs = connect(mapStateToProps, mapDispatchToProps)(OilRigs);
export { ConnectedOilRigs as OilRigs };
