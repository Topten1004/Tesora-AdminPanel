import React, { Component } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap";

const duration = 200;

class ImageModal extends Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.isOpen && this.props.isOpen) {
            TweenLite.to(this.myElement, 0.35, { y: 30, scale: 1 });
        }

        if (prevProps.isOpen && !this.props.isOpen) {
            TweenLite.to(this.myElement, 0.35, { y: -30, scale: 0.7 });
        }
    }

    closeModal = () => {
        this.props.closeModal();
    };

    render() {
        const { isOpen } = this.props;

        return (
            <Transition
                in={isOpen}
                timeout={{ enter: 0, exit: duration }}
                appear
                unmountOnExit
            >
                {tstate => (
                    <Overlay tstate={tstate} onClick={this.closeModal}>
                        <ModalWrapper ref={div => (this.myElement = div)}>
                            {this.props.children}
                        </ModalWrapper>
                    </Overlay>
                )}
            </Transition>
        );
    }
}

export default ImageModal;

const Overlay = styled.div`
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${props => (props.tstate === "entered" ? 1 : 0)};
  transition: opacity ${duration}ms ease-in-out;
`;

const ModalWrapper = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  justify-content : center;
  align-items : center;
  margin: auto auto;
  transform: scale(0.2);
  color: white;
  padding: 20px;
  border-radius: 20px;
  transform : unset !important
`;
