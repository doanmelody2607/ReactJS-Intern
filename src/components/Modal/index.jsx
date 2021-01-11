import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

const AboutUs = (props) => {
  return (
    <div>
      <Modal
        scrollable
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Image
              className="merslogo"
              src="https://cdn.iconscout.com/icon/free/png-256/mercedes-4-202841.png"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>General introduction</h4>
          <p>
            Mercedes-Benz is one of the famous manufacturers of cars, buses and
            trucks in the world. The company is considered to be the oldest car
            manufacturer in existence today. Initially, the company was owned by
            Daimler-Benz. Currently, the company is a member of the parent
            company, Daimler AG (formerly known as DaimlerChrysler AG ).
            Mercedes-Benz is also one of the pioneers in introducing a variety
            of safety technologies and initiatives that have subsequently become
            popular around the world .
          </p>

          <hr />

          <h4>Name of Mercedes-Benz</h4>
          <p>
            The name of the automaker is closely related to another name, which
            is Emil Jellinek, an Austrian businessman who is very successful and
            passionate about sports. In 1897 Emil Jellinek ordered Daimler's
            first cars, when they were in October. 1897 the maximum speed was
            only 24km / h and for him it was too slow to hit he asked Daimler to
            do it. all ways to increase the maximum speed of the car and put two
            cars named "Phoenix" in Daimler style at the same time, both of
            which were delivered to their owners in September 1998 from which
            Emil Jellinek moved further. into the motor business. In 1899 the
            DMG delivered him on order of 10 vehicles, and in 1900 it increased
            to 29 vehicles.
          </p>

          <hr />

          <h4>First Mercedes and new emblem</h4>
          <p>
            Not to stop there he kept asking DMG to continuously build faster
            and more powerful engines, And in 1899 he started to take part in
            speed races, at these races he always took The name is Mercedes - is
            the name of his 10-year-old daughter, so the most famous name in the
            car industry in the world is not given from the beginning to the
            car, but used to name the driver as well as the team. In April of
            April 900 DMG and Jellinek reached a consensus on the development of
            the Daimler automaker and engine after deciding to produce a new
            engine called Daimler-Mercedes , Jellinek officially took his
            daughter's name for the product name in Spanish Mercedes means
            "Graceful love" and maybe Emil Jellinek also did not expect that his
            daughter's name went into the history of the automobile industry and
            was a among the largest car manufacturers in the world. On
            22.11.1900 DMG delivered the first car with a new engine to
            Jellinek, a racing car with 35 jellyfish, this first Mercedes was
            developed by engineer Wilhelm Maybach and this name must be heard by
            many people. Again a famous name in the world auto industry, this
            first Mercedes has also been recognized by history books as the
            first car in the world. On June 23, 1902 the Mercedes name was
            registered as the official product name. In June 1903, Emil Jellinek
            obtained the court's permission and consent to be named Jellinek
            Mercedes from then on.
          </p>

          <hr />

          <h4>Birth of the Three-pointed star - Symbol of Mercedes</h4>
          <p>
            Before his death, Gottlied Daimler used the star as an icon while
            working as the technical director of the engine plant, DMG's
            management immediately took advantage of this idea and applied for
            exclusive protection of the three-pointed star. and a four-pointed
            star, In June 1990, however, only a three-pointed star was used,
            since 1910 the star emblem has been shaped in plastic and mounted on
            the front of the vehicle. Over time, after many changes, there have
            been many additional designs, in 1916 it was designed to add a
            circle around the star including 4 small stars and Mercedes letters.
            In 1921, the DMG Company submitted to the Department to develop a
            three-pointed star logo in a circular frame, by August 923 this
            symbol was officially put into use. After World War I accumulated
            difficulties, high inflation, the demand for goods fell sharply,
            especially for high-end products such as personal cars, so
            businesses had to look to each other to merge. or work together to
            survive this difficult period. In June 926, the two oldest German
            car companies merged to form Daimler-Benz Group, they gave birth to
            a new logo, a three-pointed star with the words Mercedes surrounded
            by a laurel wreath. This symbol has been preserved throughout the
            century and is now preserved to adorn the Mercedes-Benz branding .
            In 1927 the number of vehicles sold tripled to 7918 units and Diesel
            engines were used for truck production. In 1928 Mercedes-Benz SS was
            released. His ideas he died in 1900 at the age of 66.
          </p>

          <hr />

          <h4>Focus on quality</h4>
          <p>
            Mercedes-Benz cars have since become famous around the world as one
            of the best, often focusing on quality over quantity and on the
            application of new technologies to their cars. For example, the
            anti-lock braking system and the art of fuel injection but Mercedes
            goes too far, it costs them a lot of money. For example, the company
            recently introduced an active brake system and it was installed on
            However, the system had the problem of causing a massive recall to
            take place, costing the company millions of dollars. The racing
            market is also an area that Mercedes is quite famous for. In the
            early 1900s, the company released the Simplex, the first racing car
            made by the company, the car's undercarriage was lowered and the
            engine was weighed. it was tuned for maximum power, but Simplex
            design highlights dominated the auto races for many years to come.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AboutUs;
