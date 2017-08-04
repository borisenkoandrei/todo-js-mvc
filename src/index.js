import data from "./modules/Data";
import View from "./modules/Viewer";
import Model from "./modules/Model";
import Controller from "./modules/Controller";


const model = new Model(data);
const view = new View();

const controller = new Controller(model, view);

