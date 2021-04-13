import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import "jest-enzyme";

Enzyme.configure({ adapter: new Adapter() });
