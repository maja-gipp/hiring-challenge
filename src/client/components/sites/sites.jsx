import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  Heading,
  Column,
  List,
  Row,
  Spinner,
  Button,
} from "~gui-library";
import { sitesLoaded } from "~store/entities/sites/sites";
import { useHistory } from "react-router-dom";
import { sortByName } from "~client/utils/sorting";
import { siteDetailsRoute } from "~client/navigation/routing";

const Sites = ({ list, loading, sitesLoaded, error }) => {
  let history = useHistory();
  const [order, setOrder] = useState("original");
  const items = sortByName(list, order).map((site) => {
    return {
      id: site.id,
      name: site.name,
      details: site.country,
      onClick: () => {
        history.push(siteDetailsRoute.getUrl(site.id));
      },
    };
  });
  useEffect(() => {
    sitesLoaded();
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
        <Heading>List of oil sites {loading && <Spinner dark tiny />}</Heading>
      }
    >
      {error && <p>Unexpected error</p>}
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
  const { sites } = entities;
  return {
    loading: sites.loading,
    list: sites.list,
    error: sites.error,
  };
};

const mapDispatchToProps = {
  sitesLoaded,
};

const ConnectedSites = connect(mapStateToProps, mapDispatchToProps)(Sites);
export { ConnectedSites as Sites };
