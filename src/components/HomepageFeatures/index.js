import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Edición en Tiempo Real',
    Svg: require('@site/static/img/INTENTO.svg').default,
    description: (
      <>
        Modifica HTML y CSS directamente en el navegador y ve los cambios al instante
        sin afectar tu código fuente original.
      </>
    ),
  },
  {
    title: 'Depuración Avanzada',
    Svg: require('@site/static/img/DEPURACION.svg').default,
    description: (
      <>
        Utiliza breakpoints, seguimiento de eventos y análisis de rendimiento
        para resolver problemas complejos eficientemente.
      </>
    ),
  },
  {
    title: 'Análisis de Red',
    Svg: require('@site/static/img/Analisis.svg').default,
    description: (
      <>
        Monitoriza todas las solicitudes HTTP, inspecciona cabeceras y optimiza
        tiempos de carga de recursos.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
