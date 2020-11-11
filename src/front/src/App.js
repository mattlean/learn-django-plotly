import React, { useEffect, useRef } from 'react';
import Plot from 'react-plotly.js';

const regionA = [
  {x: '2015-02-04', y: 0},
  {x: '2015-02-08', y: 1}
]
const regionB = [
  {x: '2015-02-20', y: 0},
  {x: '2015-02-24', y: 1}
]

function App() {
  const mousePointerRef = useRef()

  useEffect(() => {
    mousePointerRef.current = document.getElementsByClassName('nsewdrag')[0]
  }, [])

  function clickHandler(data) {
    const { x: currX } = data.points[0]

    if(currX >= regionA[0].x && currX <= regionA[1].x) {
      console.log('Region A selected')
    } else {
      console.log('Region A not selected')
    }

    if(currX >= regionB[0].x && currX <= regionB[1].x) {
      console.log('Region B selected')
    } else {
      console.log('Region B not selected')
    }

    console.log('---')
  }

  function hoverHandler(data) {
    const { x: currX } = data.points[0]

    if(
      currX >= regionA[0].x && currX <= regionA[1].x ||
      currX >= regionB[0].x && currX <= regionB[1].x
    ) {
      mousePointerRef.current.style.cursor = 'pointer'
    } else {
      mousePointerRef.current.style.cursor = ''
    }
  }

  return (
    <div className="App">
      <Plot
        data={[
          {
            x: ['2015-02-01', '2015-02-02', '2015-02-03', '2015-02-04', '2015-02-05',
                '2015-02-06', '2015-02-07', '2015-02-08', '2015-02-09', '2015-02-10',
                '2015-02-11', '2015-02-12', '2015-02-13', '2015-02-14', '2015-02-15',
                '2015-02-16', '2015-02-17', '2015-02-18', '2015-02-19', '2015-02-20',
                '2015-02-21', '2015-02-22', '2015-02-23', '2015-02-24', '2015-02-25',
                '2015-02-26', '2015-02-27', '2015-02-28'],
            y: [-14, -17, -8, -4, -7, -10, -12, -14, -12, -7, -11, -7, -18, -14, -14,
                -16, -13, -7, -8, -14, -8, -3, -9, -9, -4, -13, -9, -6],
            mode: 'line',
            name: 'temperature'
          }
        ]}
        layout={ {
          shapes: [
              {
                  type: 'rect',
                  xref: 'x',
                  yref: 'paper',
                  x0: regionA[0].x,
                  y0: regionA[0].y,
                  x1: regionA[1].x,
                  y1: regionA[1].y,
                  fillcolor: '#28A745',
                  opacity: 0.2,
                  line: {
                      width: 0
                  }
              },
              {
                  type: 'rect',
                  xref: 'x',
                  yref: 'paper',
                  x0: regionB[0].x,
                  y0: regionB[0].y,
                  x1: regionB[1].x,
                  y1: regionB[1].y,
                  fillcolor: '#ffc107',
                  opacity: 0.2,
                  line: {
                      width: 0
                  }
              }
          ],
          height: 500,
          width: 500
        } }
        onClick={clickHandler}
        onHover={hoverHandler}
      />
    </div>
  );
}

export default App;
