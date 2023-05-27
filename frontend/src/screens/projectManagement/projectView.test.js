import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import ProjectView from './projectView';
import rootReducer from '../../reducers';

describe('ProjectView', () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Project 1 Description',
      price: 100,
      photo: 'project1.jpg',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Project 2 Description',
      price: 200,
      photo: 'project2.jpg',
    },
  ];

  beforeEach(() => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectView />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders project cards correctly', () => {
    projects.forEach((project) => {
      const projectName = screen.getByText(project.name);
      const projectDescription = screen.getByText(project.description);
      const projectPrice = screen.getByText(project.price.toString());
      const projectImage = screen.getByAltText('Card image cap');
      const projectButton = screen.getByText('Donate');

      expect(projectName).toBeInTheDocument();
      expect(projectDescription).toBeInTheDocument();
      expect(projectPrice).toBeInTheDocument();
      expect(projectImage).toBeInTheDocument();
      expect(projectButton).toBeInTheDocument();
    });
  });

  it('handles button clicks correctly', () => {
    const donateButton = screen.getAllByText('Donate')[0];
    const navigateMock = jest.fn();
    const useNavigateMock = jest.spyOn(require('react-router-dom'), 'useNavigate');
    useNavigateMock.mockImplementation(() => navigateMock);

    expect(navigateMock).not.toHaveBeenCalled();
    donateButton.click();
    expect(navigateMock).toHaveBeenCalled();
  });
});
