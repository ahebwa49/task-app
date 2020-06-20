import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;
const Title = styled.h3``;
const TaskList = styled.div``;

class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <TaskList>tasks go here</TaskList>
      </Container>
    );
  }
}

export default Column;
