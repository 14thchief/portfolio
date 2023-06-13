

const CustomModal = ({ title, children, hideModal, width }) => {
  return (
    <>
      <div className="bg-black bg-opacity-50 flex justify-center items-center overflow-x-hidden overflow-y-auto register-scroll fixed inset-0 z-50 outline-none focus:outline-none w-screen h-screen min-h-full">
        <div className={`relative w-[90%] md:w-[75%] lg:w-[50%] !max-w-[100%] mx-auto h-[75%] min-h-max w-[${width?? 50}%]`}>
          {/*content*/}
          <div className="rounded border border-opacity-50 bg-gray-600 text-white shadow-lg relative flex flex-col w-full h-full min-h-max bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-1 px-4  border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={hideModal}
              >
                <span className="h-6 w-6 text-2xl block outline-none focus:outline-none text-red-400">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto w-full overflow-auto register-scroll">{children}</div>
            {/*footer*/}
            <div className="flex items-center justify-end px-2 border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={hideModal}
              >
                Close
              </button>
              {/* <button
								className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowModal(false)}
							>
								Save Changes
							</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default CustomModal;
