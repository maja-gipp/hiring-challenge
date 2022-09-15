import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  Heading,
  Column,
  Row,
  List,
  Spinner,
  Button,
} from "~gui-library";
import { oilRigsLoaded } from "~store/entities/oil-rigs/oil-rigs";
const sortByName = (list, order) => {
  if (order === "descending") {
    return [...list].sort((a, b) => (a.name < b.name ? 1 : -1));
  }
  if (order === "ascending") {
    return [...list].sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  return list;
};

const OilRigs = ({ list, loading, oilRigsLoaded }) => {
  const [order, setOrder] = useState("original");
  const items = sortByName(list, order).map((oilRig) => {
    return {
      id: oilRig.id,
      name: oilRig.name,
      details: oilRig.country,
    };
  });
  useEffect(() => {
    oilRigsLoaded();
  }, []);
  const handleSortDescending = () => {
    setOrder("descending");
  };
  const handleSortAscending = () => {
    setOrder("ascending");
  };
  return (
    <Card
      heading={
        <Heading>List of oil rigs {loading && <Spinner dark tiny />}</Heading>
      }
    >
      <Row>
        <Column>
          <Button onClick={handleSortDescending} label="sort descending" />
          <Button onClick={handleSortAscending} label="sort ascending" />
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
