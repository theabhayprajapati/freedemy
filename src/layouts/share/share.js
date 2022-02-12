import React from "react";

import CustomModal from "../../components/custom-modal/CustomModal";

import { useGlobalContext } from "../../context-providerr/context-provider";

import "./share.css";

let courseList = require("../../courselist.json");
const Share = () => {
    const { modalCourseCode, isShareModalOpen, closeShareModal } =
        useGlobalContext();
    let shareMessage =
        " Hey checkout the course '" +
        courseList[modalCourseCode].title +
        "' by : " +
        courseList[modalCourseCode].instructor +
        " \n" +
        courseList[modalCourseCode].courseurl;

    const shareViaMail = () => {
        let url = `mailto:?&subject=Check This Course &body=${shareMessage}`;
        window.open(url, "_blank");
    };
    const shareViaWhatsApp = () => {
        let url = `https://api.whatsapp.com/send?phone=&text=${shareMessage}`;
        window.open(url, "_blank");
    };
    const shareViaTelegram = () => {
        let url = `https://telegram.me/share/url?url=${courseList[modalCourseCode].courseurl}&text=${shareMessage}`;
        window.open(url, "_blank");
    };
    const copyShareLink = () => {
        navigator.clipboard.writeText(courseList[modalCourseCode].courseurl);
    };

    return (
        <CustomModal
            isModalOpen={isShareModalOpen}
            closeModal={closeShareModal}>
            <div className='share-items-container'>
                <p className='share-info'>{shareMessage}</p>
                <button
                    type='button'
                    className='share-buttons'
                    onClick={shareViaMail}>
                    <i className='fas fa-envelope mail-icon'></i>
                </button>
                <button
                    type='button'
                    className='share-buttons '
                    onClick={shareViaWhatsApp}>
                    <i className='fab fa-whatsapp whatsapp-icon'></i>
                </button>
                <button
                    type='button'
                    className='share-buttons '
                    onClick={shareViaTelegram}>
                    <i className='fab fa-telegram telegram-icon'></i>
                </button>
                <button
                    type='button'
                    className='share-buttons'
                    onClick={copyShareLink}>
                    <i className='fas fa-clone copy-icon'></i>
                </button>
            </div>
        </CustomModal>
    );
};

export default Share;
