import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import PostShowHeader from '../../app/components/PostShowHeader';

describe('<PostShowHeader />', () => {
  it('renders post header', () => {
    const tree = renderer.create(
      <PostShowHeader />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
