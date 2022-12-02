import React from 'react';

export default function NotFound(props) {
  return (
    <div id="page-404" className={props.className}>
      <section>
        <h1>404</h1>
        <p> Public: I want to be virtuous
          {' '}
          <a href="/">Back to Home</a>
        </p>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: '#page-404{ height: calc(100% - 199px);}',
        }}
      />
    </div>
  );
}
