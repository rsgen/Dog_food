import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import { AntApp } from "./components/app-ant";
import { AppMui } from './components/app-mui';
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<StrictMode><AppMui /></StrictMode>);
