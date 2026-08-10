import type { Metadata } from 'next';
import SpanishTrustPage from '@/components/SpanishTrustPage';

export const metadata: Metadata = {
  title: { absolute: 'Política de Privacidad | DearPassengers.net en Español' },
  description: 'Datos técnicos, cookies, Google Analytics, AdSense, consentimiento, enlaces externos y derechos de privacidad en DearPassengers.net.',
  alternates: { canonical: '/es/privacidad/', languages: { en: '/privacy-policy/', es: '/es/privacidad/', ar: '/ar/privacy-policy/', de: '/de/datenschutz/', tr: '/tr/gizlilik/', 'pt-BR': '/pt-br/privacidade/', 'my-MM': '/my/privacy-policy/', 'x-default': '/privacy-policy/' } },
};

export default function Page() {
  return (
    <SpanishTrustPage
      title="Política de privacidad"
      lede="Última actualización: 10 de agosto de 2026. Esta política explica qué datos técnicos pueden tratarse al visitar DearPassengers.net, cómo funcionan Google Analytics y Google AdSense, qué papel tienen las cookies y el consentimiento, y qué opciones tiene cada visitante. DearPassengers.net es una guía editorial independiente: no vende el juego, no crea cuentas y no solicita credenciales de Steam."
      englishPath="/privacy-policy/"
      sections={[
        {
          heading: 'Responsable, alcance e independencia',
          paragraphs: [
            'Esta versión se aplica a las páginas en español alojadas en dearpassengers.net. El sitio publica información no oficial sobre el juego Dear Passengers y no pertenece a FLEXUS, Valve, Steam, Google ni a los proveedores publicitarios mencionados. Las páginas externas enlazadas desde una guía actúan bajo sus propias políticas y condiciones.',
            'Para dudas de privacidad se puede escribir a editor@dearpassengers.net. El correo debe incluir solo la información necesaria para entender la solicitud. No envíes contraseñas, datos de pago, documentos de identidad ni archivos privados de una cuenta de Steam. Para errores editoriales también está disponible la página de contacto y correcciones en español.',
          ],
        },
        {
          heading: 'Datos técnicos de una visita',
          paragraphs: [
            'Cuando el navegador solicita una página, los servicios de alojamiento, distribución, seguridad, medición o publicidad pueden tratar la URL solicitada, la fecha y hora, la dirección IP, el referente, el tipo de navegador y dispositivo, el sistema operativo, el idioma y datos de diagnóstico. Una región aproximada puede inferirse de la IP, pero el sitio no solicita la ubicación GPS precisa.',
            'Las cabeceras del sitio deshabilitan el acceso del navegador a geolocalización, cámara y micrófono. DearPassengers.net no intenta incluir nombres, correos, teléfonos, identificadores de Steam ni el contenido de mensajes privados en las URL, los eventos de medición o las solicitudes publicitarias.',
          ],
        },
        {
          heading: 'Cookies, almacenamiento local y tecnologías similares',
          paragraphs: [
            'Una cookie es un pequeño valor que un servicio pide conservar al navegador. El almacenamiento local, los píxeles, las balizas web y ciertos identificadores cumplen funciones parecidas. Pueden recordar una preferencia de consentimiento, proteger una sesión técnica, limitar anuncios repetidos, medir el funcionamiento de una página o prevenir actividad no válida.',
            'La herramienta editorial de preparación previa al lanzamiento guarda localmente un identificador de revisión para avisar si cambió la lista publicada. Ese valor no contiene un nombre, no crea una cuenta, no sigue al visitante entre sitios y puede eliminarse desde los controles de datos del navegador. Bloquear todo el almacenamiento puede impedir que una elección se recuerde.',
          ],
        },
        {
          heading: 'Google Analytics 4',
          paragraphs: [
            'DearPassengers.net utiliza Google Analytics 4 para conocer de forma agregada qué páginas se visitan, desde qué categorías de dispositivo llega el tráfico, qué referencias funcionan y dónde puede existir un error de navegación. Según la ubicación y el consentimiento, Google puede tratar cookies o identificadores similares, URL, referente, interacciones, información técnica del navegador y ubicación aproximada derivada de la IP.',
            'La configuración activa la anonimización de IP y el sitio no envía deliberadamente a Analytics nombres, correos, teléfonos, credenciales ni contenidos de formularios. Los informes se usan para mejorar la arquitectura y la claridad de las guías, no para tomar decisiones sobre una persona identificada.',
          ],
        },
        {
          heading: 'Google AdSense y proveedores publicitarios',
          paragraphs: [
            'El sitio contiene código de Google AdSense. Cuando se solicita o muestra publicidad, Google y proveedores externos participantes pueden colocar o leer cookies, usar almacenamiento local o balizas web y tratar dirección IP, señal de consentimiento, contexto de la página, información del dispositivo, identificadores del navegador, interacción con el anuncio y señales de seguridad o fraude.',
            'Estas tecnologías pueden servir para mostrar y medir anuncios, limitar repeticiones, detectar tráfico no válido y, solo cuando la ley, el consentimiento y la configuración lo permiten, personalizar publicidad según visitas anteriores a este u otros sitios. Los anuncios no personalizados también pueden necesitar tecnología para frecuencia, medición agregada, seguridad o prevención del fraude. DearPassengers.net no vende directamente a anunciantes un correo electrónico o identidad de Steam.',
          ],
        },
        {
          heading: 'Consentimiento en Europa, Reino Unido y Suiza',
          paragraphs: [
            'Para visitantes del Espacio Económico Europeo, Reino Unido y Suiza, el almacenamiento publicitario, el almacenamiento analítico, los datos de usuario publicitarios y la personalización se configuran como denegados mientras la elección esté pendiente. Google Consent Mode comunica a las etiquetas el estado aplicable.',
            'Cuando el mensaje certificado de consentimiento de Google está publicado para el sitio, permite aceptar, rechazar o gestionar finalidades y proveedores. El pie de página muestra entonces el control “Configuración de privacidad y cookies” para volver a abrirlo. La publicación y segmentación regional del mensaje dependen también de la configuración de “Privacidad y mensajes” de AdSense; la mera presencia del script no demuestra que esa configuración de cuenta esté activa.',
          ],
        },
        {
          heading: 'Enlaces externos y vídeo',
          paragraphs: [
            'Las guías enlazan a Steam, FLEXUS, YouTube y publicaciones utilizadas como fuente. Al abrir un enlace, el proveedor de destino recibe una solicitud que puede incluir IP, navegador, página de destino y, en algunos casos, referente. Si inicias sesión, compras o añades el juego a tu lista de deseos, esa operación ocurre bajo la cuenta y política del proveedor externo, no dentro de DearPassengers.net.',
            'Los vídeos se insertan con el dominio de privacidad mejorada youtube-nocookie.com cuando es posible. Aun así, reproducir un contenido puede iniciar conexiones con servicios de Google. El sitio no controla las cookies, compras, soporte, cuentas ni decisiones de conservación de esos terceros.',
          ],
        },
        {
          heading: 'Mensajes, conservación y destinatarios',
          paragraphs: [
            'La web pública no tiene registro, comentarios, subida de archivos, pagos ni formulario propio. Si escribes al correo editorial, el proveedor de correo trata la dirección y el contenido que elijas enviar. El mensaje puede conservarse durante el tiempo razonablemente necesario para responder, documentar una corrección, resolver una solicitud de derechos, proteger el sitio o cumplir una obligación legal.',
            'Los registros técnicos y los datos gestionados por Google se conservan conforme a la configuración y las políticas de cada servicio. La información puede compartirse con proveedores cuando sea necesaria para alojar, proteger, medir o monetizar la web, o cuando la ley lo exija. Un mensaje privado no se publica por el mero hecho de haber sido enviado.',
          ],
        },
        {
          heading: 'Opciones y derechos',
          paragraphs: [
            'Puedes bloquear o borrar cookies y almacenamiento local desde el navegador, revisar la personalización en Google Ads Settings o My Ad Center, y utilizar el complemento de inhabilitación de Google Analytics cuando sea compatible. Si aparece el control de privacidad del pie, permite volver a abrir el mensaje certificado y cambiar una elección aplicable.',
            'Según el país, pueden existir derechos de acceso, rectificación, supresión, limitación, oposición o retirada del consentimiento. Para preguntar por datos personales incluidos en un correo anterior, escribe desde una dirección que permita localizarlo y explica la solicitud con el mínimo detalle. Retirar un consentimiento no afecta al tratamiento realizado legítimamente antes de retirarlo.',
          ],
        },
        {
          heading: 'Menores, seguridad y cambios',
          paragraphs: [
            'DearPassengers.net es un recurso informativo de audiencia general, no un servicio dirigido a menores ni una aplicación que cree perfiles infantiles. No solicita datos sensibles ni crea audiencias basadas en salud, religión, opiniones políticas, orientación sexual, situación financiera o ubicación precisa. Si crees que un menor envió información personal al correo editorial, avisa con la información mínima necesaria para revisar el mensaje.',
            'Se aplican controles técnicos razonables, pero ningún envío o almacenamiento en Internet puede garantizar seguridad absoluta. Esta política se actualizará si cambia un servicio o el uso de los datos; la fecha solo avanzará tras una modificación sustancial. La versión inglesa completa y los enlaces oficiales de Google ofrecen contexto adicional sobre sus servicios.',
          ],
        },
      ]}
    />
  );
}
