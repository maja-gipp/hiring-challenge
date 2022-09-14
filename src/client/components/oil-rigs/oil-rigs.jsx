import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Heading, Column, Row, List, Spinner } from "~gui-library";
import { oilRigsLoaded } from "~store/entities/oil-rigs/oil-rigs";
import styles from "./oil-rigs.module.less";
import { useHistory } from "react-router-dom";

const OilRigs = ({ list, loading, oilRigsLoaded }) => {
  console.log(list);
  let history = useHistory();
  const items = list.map((oilRigs) => {
    return {
      id: oilRigs.id,
      name: oilRigs.name,
      details: oilRigs.country,
      onClick: () => {
        console.log(oilRigs.id);
        history.push(`/oil-rigs/${oilRigs.id}`);
      },
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
