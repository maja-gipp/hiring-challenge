import React from 'react';
import { connect } from 'react-redux';
import {Button, Card, Heading, Column, Row, CheckBox} from '~gui-library';
import {tasksLoaded} from '~store/entities/tasks/tasks';
import styles from './tasks.module.less';

const Tasks = ({
  list,
  loading,
  tasksLoaded
}) => {
  return (
    <Card
      heading={
        <Heading>Tasks</Heading>
      }
    >
      <Row>
        <Column width={200}>
          <Button
            label="Load tasks"
            onClick={tasksLoaded}
            loading={loading}
            disabled={loading}
          />
        </Column>
        <Column>
          <div className={styles.taskList}>
            {list.length ? (
              <ul>
                {list.map((task, i) => (
                  <li key={i}>
                    <CheckBox label={task.title} checked={task.completed} />
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

const mapStateToProps = ({ entities }) => {
  const {tasks} = entities;
  return {
    loading: tasks.loading,
    list: tasks.list
  }
};
const mapDispatchToProps = {
  tasksLoaded,
};
const ConnectedTasks = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tasks);
export { ConnectedTasks as Tasks };
