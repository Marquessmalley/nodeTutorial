const fs = require('fs');

// retrieve tour data
const tours = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf8')
);

module.exports.getTours = (req, res) => {
  res.status(200).json({
    status: 'Success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

module.exports.getTour = (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((tour) => tour.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'Error',
      message: 'Cannot find tour!',
    });
  }

  res.status(200).json({
    status: 'Success',
    data: {
      tour,
    },
  });
};

module.exports.createTour = (req, res) => {
  // Creates new id for the req.body and adds to the tours array
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  // adding new object to tour json file
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'Success',
        data: {
          tours,
        },
      });
    }
  );
};

module.exports.updateTour = (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((tour) => tour.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'Error',
      message: 'Cannot find tour!',
    });
  }

  res.status(200).json({
    status: 'Success',
    data: {
      tour: 'tour will be here',
    },
  });
};

module.exports.deleteTour = (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((tour) => tour.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'Error',
      message: 'Cannot find tour!',
    });
  }

  res.status(200).json({
    status: 'Success',
    data: null,
    message: 'Item deleted!',
  });
};
