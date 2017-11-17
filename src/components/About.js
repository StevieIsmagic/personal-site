import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <div class="grid-content small-12">
          <h3>Our Amazing Hotels</h3>
          <h3 class="subheader">Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue.
          </h3>
        </div>
        <div class="grid-block small-12 small-up-2 medium-up-2 large-up-3">
          <div class="grid-content">
            <div class="dark card">
              <div class="card-divider">
                The Oriental, Bangkok
              </div>
              <div class="card-section">
                <h4>Chiang Mai, Thailand</h4>
                <p>Consistently rated as one of the great hotels of the world.</p>
              </div>
            </div>
          </div>
          <div class="grid-content">
            <div class="primary card">
              <div class="card-divider">
                Sabi Sabi Private Game Reserve
              </div>
              <div class="card-section">
                <h4>Positano, Italy</h4>
                <p>Consistently rated as one of the great hotels of the world.</p>
              </div>
            </div>
          </div>
          <div class="grid-content">
            <div class="success card">
              <div class="card-divider">
                Malliouhana Hotel &amp; Spa
              </div>
              <div class="card-section">
                <h4>Soufriere, St Lucia</h4>
                <p>Consistently rated as one of the great hotels of the world.</p>
              </div>
            </div>
          </div>
          
      </div>
      </div>
    )
  }

}
export default About;