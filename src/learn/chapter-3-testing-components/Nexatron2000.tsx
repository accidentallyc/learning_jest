import {useState} from "react";
import {connect} from "react-redux";

interface OwnProps {
  initial: string;
}

interface StateProps {
  next: string;
}

export type Nexatron2000 = OwnProps & StateProps;

export const _Nexatron2000 = (props: Nexatron2000) => {
  const [display, setDisplay] = useState("");

  return <div>
    <h1>{display}</h1>

    <button onClick={ () => setDisplay(props.next) }>N</button>
    <button onClick={ () => setDisplay(props.initial) }>C</button>
  </div>;
};

const mapStateToProps = (state:any) => {
  return {
    next: 'baz',
  }
}

export const Nexatron2000 = connect(mapStateToProps)(_Nexatron2000);
