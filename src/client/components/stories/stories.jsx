import React from 'react';
import {connect} from 'react-redux';
import {Button, Card, Heading, Column, Row} from '~gui-library';
import {storiesLoaded} from '~store/entities/stories/stories';
import styles from './stories.module.less';

const Stories = ({topStories, loading, storiesLoaded}) => {
  return (
    <Card
      heading={
        <Heading>Top Stories</Heading>
      }
    >
      <Row>
        <Column width={200}>
          <Button
            label="Load stories"
            onClick={storiesLoaded}
            loading={loading}
            disabled={loading}
          />
        </Column>
        <Column>
          <div className={styles.storiesList}>
            {topStories.length ? (
              <ul>
                {topStories.map((storyID, i) => (
                  <li key={i}>
                    <Card heading={storyID}/>
                  </li>
                ))}
              </ul>
            ) : (
              <em>None loaded</em>
            )}
          </div>
        </Column>
      </Row>
    </Card>
  );
}

const mapStateToProps = ({entities}) => {
  const {stories} = entities;
  return {
    loading: stories.loading,
    topStories: stories.topStories
  }
};
const mapDispatchToProps = {
  storiesLoaded,
};

const ConnectedStories = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stories);
export {ConnectedStories as Stories};
