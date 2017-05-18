import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import PostItem from '../../app/components/PostItem/PostItem';

describe('<Post Item />', () => {
  const POST = {
    title: 'Test title',
    link: 'example.com/url',
    ups: 10,
    comment_count: 10,
    views: 10,
  };
  
  it('renders post information', () => {
    const tree = renderer.create(
      <PostItem post={POST} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
