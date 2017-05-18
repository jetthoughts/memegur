import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import AlbumHeader from '../../app/components/AlbumHeader/AlbumHeader';

describe('<AlbumHeader />', () => {
  it('renders post header', () => {
    const tree = renderer.create(
      <AlbumHeader />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
