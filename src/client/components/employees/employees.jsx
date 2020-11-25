import React from 'react';
import {connect} from 'react-redux';
import {Button, Card, Heading, Column, Row} from '~gui-library';
import {employeesLoaded} from "~store/entities/employees/employees";
import styles from './employees.module.less';

const Employees = ({list, loading, employeesLoaded}) => {
  return (
    <Card
      heading={
        <Heading>List of employees</Heading>
      }
    >
      <Row>
        <Column width={200}>
          <Button
            label="Load employees"
            onClick={employeesLoaded}
            loading={loading}
            disabled={loading}
          />
        </Column>
        <Column>
          <div className={styles.employeesList}>
            {list.length ? (
              <ul>
                {list.map((employee, i) => (
                  <li key={i}>
                    {employee.name}
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
  const {employees} = entities;
  return {
    loading: employees.loading,
    list: employees.list
  }
};
const mapDispatchToProps = {
  employeesLoaded,
};

const ConnectedEmployees = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Employees);
export {ConnectedEmployees as Employees};
