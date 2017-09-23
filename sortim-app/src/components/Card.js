import Cards, { Card } from 'react-swipe-card';

const data = this.props.otherUsers;

const Wrapper = () => {
  return (
      <Cards onEnd={action('end')} className='master-root'>
        {data.map(item =>
          <Card
            onSwipeLeft={action('swipe left')}
            onSwipeRight={action('swipe right')}>
            <h2>{item}</h2>
          </Card>
        )}
      </Cards>
  )
}
