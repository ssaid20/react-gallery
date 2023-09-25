# React Gallery App

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)

---

## Overview

React Gallery App is an intuitive gallery application designed with React and Express. Users can showcase, like, and delete their images, creating a dynamic and interactive gallery experience.

## Features

- **Showcase Images**: Seamlessly display your cherished images in an interactive gallery layout.
  
- **Like Images**: With just a click, users can appreciate and like any image that stands out to them.

- **Image Description**: Every image is accompanied by a description, providing context and meaning to viewers. This description is revealed when users click on an image.
  
- **Delete Images**: Users have the ability to remove any image from the gallery, ensuring that only their most favored images remain on display.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/ssaid20/react-gallery.git
    ```

2. Create a database named `react_gallery`.

3. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. We recommend using Postico (or any other PostgreSQL management tool) to run those queries, as that was used to create the queries.

4. Navigate to the project directory and run `npm install` to install required packages.

5. Run `npm run server` to start the server.

6. In another terminal, run `npm run client` to start the React application. This will automatically open a new browser tab pointing to the client.

