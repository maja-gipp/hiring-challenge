import React from 'react';
import {connect} from 'react-redux';
import {Card, Heading, Spinner} from '~gui-library';
import {sitesLoaded} from "~store/entities/sites/sites";
import { useEffect } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';

const SitesChart = ({sites, sitesLoaded}) => {

  useEffect(() => {
    sitesLoaded();
  }, [])

  const isLoading = sites.loading;

  const data = sites.list.map(site => {
    return {
      name: site.name,
      oilRigs: site.oilRigs.length
    }
  })

  return (
    <Card heading={<Heading>Oil rigs per site</Heading>}>
      {isLoading 
        ? <Spinner /> 
        : (<ResponsiveContainer height={500}><BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="oilRigs" name="Oil rigs" fill="#8884d8" />
          </BarChart></ResponsiveContainer>)
      }
    </Card>
  );
}

const mapStateToProps = ({entities}) => {
  const {sites} = entities;
  return {
    sites,
  }
};

const mapDispatchToProps = {
  sitesLoaded,
};

const ConnectedSitesChart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SitesChart);
export {ConnectedSitesChart as SitesChart};