import React, { useState } from "react";
import img1 from './assets/fto1.jpeg';
import img2 from './assets/fto2.jpeg';
import img3 from './assets/fto3.jpeg';
import img4 from './assets/fto4.jpeg';
import img5 from './assets/fto5.jpeg';
import img6 from './assets/fto6.jpg';

const App = () => {
    const [imgError, setImgError] = useState(false);
    const Imatge = img6; 
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f0f9ff, #f0fdf4)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <style jsx>{`
      #root {
          width: 100%;
      }
        .btn-whatsapp {
          background: #25D366;
          color: white;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }
        .btn-whatsapp:hover {
          transform: scale(1.05);
          background: #128C7E;
        }
        .btn-outline {
          background: transparent;
          border: 2px solid white;
          color: white;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          background: white;
          color: #25D366;
        }
        .service-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .service-card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        .benefit-card {
          textAlign: 'center';
        }
        .testimonial-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        padding: '1rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
      {!imgError ? (
        <img
          src={Imatge}
          alt="Imatge"
          onError={() => setImgError(true)} // si falla → activa error
          style={{
            height: "40px",
            width: "40px",
            objectFit: "cover",
            objectPosition: "100% 24%",
            borderRadius: "15%"
          }}
        />
      ) : (
        <div
          style={{
            height: "40px",
            width: "40px",
            background: "linear-gradient(to right, #3b82f6, #10b981)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          B
        </div>
      )}
            <h1 style={{
              marginLeft: '12px',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              Biel Costa
            </h1>
          </div>
          <nav style={{ display: 'none' }}>
            {/* Hidden on mobile */}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            El tècnic informàtic del teu poble
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Solucions ràpides, econòmiques i de confiança per a casa teva o el teu negoci
          </p>
          <a 
            href="https://wa.me/644346495" 
            className="btn-whatsapp"
            style={{
              background: '#25D366',
              color: 'white',
              fontWeight: '600',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Contacta'm per WhatsApp
          </a>
        </div>
      </section>

      {/* Qui sóc */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3rem',
            textAlign: 'center'
          }}>
      {!imgError ? (
        <img
          src={Imatge}
          alt="Imatge"
          onError={() => setImgError(true)} // si falla → activa error
          style={{
            height: "256px",
            width: "256px",
            objectFit: "cover",
            objectPosition: "100% 24%",
            borderRadius: "15%"
          }}
        />
      ) : (
            <div style={{
              width: '256px',
              height: '256px',
              borderRadius: '12px',
              background: 'linear-gradient(to bottom right, #60a5fa, #34d399)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              fontSize: '4rem',
              margin: '0 auto'
            }}>
              📷
            </div>
      )}
            <div style={{ maxWidth: '800px' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1.5rem'
              }}>
                Qui sóc
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#4b5563',
                lineHeight: '1.75',
                marginBottom: '1rem'
              }}>
                Sóc en Biel Costa, un jove apassionat per la tecnologia i la programació, amb experiència ajudant veïns, Familiars i negocis locals. 
                Em dedico a resoldre problemes informàtics de forma ràpida i senzilla, amb un tracte proper i personal.
              </p>
              <p style={{
                fontSize: '1.125rem',
                color: '#4b5563',
                lineHeight: '1.75'
              }}>
                Entenc que la tecnologia pot ser complicada, per això m'encarrego de fer-la fàcil i accessible per a tothom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serveis */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Serveis que ofereixo
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                title: "Diagnòstic i reparació d'ordinadors",
                description: "Detecto i soluciono problemes en els teus dispositius perquè tornin a funcionar com abans.",
                icon: "💻"
              },
              {
                title: "Instal·lació i configuració de programes",
                description: "T'ajudo a instal·lar i configurar el programari que necessites per a casa o el teu negoci.",
                icon: "🛠️"
              },
              {
                title: "Configuració de mòbils, ordinadors, televisions, impresores...",
                description: "Configuro els teus dispositius mòbils, smart TVs i altres aparells perquè els puguis utilitzar sense problemes.",
                icon: "📱"
              },
              {
                title: "Xarxes i Internet",
                description: "Amplio la cobertura wifi, configuro routers i soluciono problemes de connexió a Internet.",
                icon: "📶"
              },
                {
                  title: "Impressores i còpies de seguretat",
                  description: "Configuro impressores i et mostro com fer còpies de seguretat dels teus documents importants al teu servidor local.",
                  icon: "🖨️"
                },
              {
                  title: "Suport per negocis",
                  description: "Serveis de manteniment mensual, configuració de servidors bàsics i suport continuat per a empreses.",
                  icon: "🏢"
              },
              {
                title: "Domòtica",
                description: "T'ajudo a configurar bombetes intel·ligents, assistents de veu i altres dispositius domòtics.",
                icon: "🏠",
              }
            ].map((service, index) => (
              <div key={index} className="service-card" style={{
                background: 'white',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)'}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.75rem'
                }}>
                  {service.title}
                </h3>
                <p style={{ color: '#6b7280' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preus */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Preus orientatius
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              backgroundColor: '#eff6ff',
              borderRadius: '0.75rem',
              padding: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1e40af',
                marginBottom: '1rem'
              }}>
                Treballs puntuals
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #dbeafe'
                }}>
                  <span>Diagnòstics senzills</span>
                  <span style={{ fontWeight: '600' }}>des de 15€</span>
                </li>
                <li style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #dbeafe'
                }}>
                  <span>Reparacions bàsiques</span>
                  <span style={{ fontWeight: '600' }}>30-45€</span>
                </li>
                <li style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0'
                }}>
                  <span>Reparacions complexes</span>
                  <span style={{ fontWeight: '600' }}>fins a 60€</span>
                </li>
              </ul>
            </div>
            <div style={{
              backgroundColor: '#f0fdf4',
              borderRadius: '0.75rem',
              padding: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#065f46',
                marginBottom: '1rem'
              }}>
                Pack mensual per negocis
              </h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
                Servei de manteniment i suport continuat per a empreses locals.
              </p>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#059669',
                marginBottom: '0.5rem'
              }}>
                50€ - 100€/mes
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Segons les necessitats del teu negoci
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ fontStyle: 'italic', color: '#9ca3af' }}>
              *Preus sense desplaçament dins del poble. Pressupost personalitzat sense compromís.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficis */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(to right, #3b82f6, #10b981)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Per què triar-me a mi?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                title: "Servei proper",
                description: "Sóc un jove que ajudat semper a casa i entenc les teves necessitats locals."
              },
              {
                title: "Preus justos",
                description: "Transparència total en els preus, sense sorpreses i mes barats que la majoria de técnics."
              },
              {
                title: "Rapidesa",
                description: "Amplia disponibilitat i solucions lo avans possible."
              },
              {
                title: "Flexibilitat",
                description: "Suport presencial o a distància segons les teves necessitats, sempre que sigui possible."
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                textAlign: 'center'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem'
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {benefit.title}
                </h3>
                <p style={{ opacity: 0.9 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonis */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            El que diuen els meus clients
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/*[
              {
                name: "Maria S.",
                location: "Veïna del poble",
                text: "En Biel em va solucionar el problema de l'ordinador en menys d'una hora. Molt professional i amb un tracte molt proper."
              },
              {
                name: "Joan R.",
                location: "Botiga local",
                text: "Des de que contractem el servei mensual, no hem tingut cap problema informàtic. Respon ràpid i sempre està disponible."
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card" style={{
                background: 'white',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}>
                <p style={{
                  color: '#4b5563',
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}>
                  "{testimonial.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#d1d5db',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#6b7280'
                  }}>
                    👤
                  </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <p style={{
                      fontWeight: '600',
                      color: '#1f2937'
                    }}>
                      {testimonial.name}
                    </p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))*/}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ fontStyle: 'italic', color: '#9ca3af' }}>
              Més testimonis s'afegiran aviat!
            </p>
          </div>
        </div>
      </section>

      {/* Crida final a l'acció */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(to right, #10b981, #3b82f6)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Necessites ajuda amb la tecnologia?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            Escriu-me ara i ho solucionem ràpidament
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <a 
              href="https://wa.me/644346495" 
              className="btn-whatsapp"
              style={{
                background: '#25D366',
                color: 'white',
                fontWeight: '600',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              📱 Contacta per WhatsApp
            </a>
            <a 
              href="tel:+34644346495" 
              className="btn-outline"
              style={{
                background: 'transparent',
                border: '2px solid white',
                color: 'white',
                fontWeight: '600',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#25D366';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              ☎️ Truca'm: 644 34 64 95
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '3rem 2rem',
        marginTop: '2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                Biel Costa
              </h3>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>
                Tècnic informàtic del poble
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                Tecnologia fàcil i a prop teu
              </p>
            </div>
            <div>
              <p style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>
                📞 644 34 64 95
              </p>
              <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                ✉️ <a href="mail:costasamso@gmail.com"> costasamso@gmail.com</a>
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem'
              }}>
                <a href="https://wa.me/644346495" style={{
                  color: '#25D366',
                  fontSize: '1.5rem',
                  textDecoration: 'none'
                }}>
                  💬
                </a>
                <a href="tel:+34644346495"
                  style={{
                  color: '#9ca3af',
                  fontSize: '1.5rem',
                  textDecoration: 'none'
                }}>
                  📱
                </a>
                {/*<a href="#" style={{
                  color: '#9ca3af',
                  fontSize: '1.5rem',
                  textDecoration: 'none'
                }}>
                  📺
                </a>*/}
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '2rem',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#9ca3af',
            fontSize: '0.875rem'
          }}>
            <p>&copy; 2025 Biel Costa - Tots els drets reservats</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;