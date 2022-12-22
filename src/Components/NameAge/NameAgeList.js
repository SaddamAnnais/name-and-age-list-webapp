import NameAgeItem from "./NameAgeItem";
import Wrapper from "../UI/Wrapper";

const NameAgeList = (props) => {
  console.log(props.data);
  return (
    <Wrapper>
      {props.data.map((user) => {
        return <NameAgeItem name={user.name} age={user.age} key={user.id} />;
      })}
    </Wrapper>
  );
};

export default NameAgeList;
