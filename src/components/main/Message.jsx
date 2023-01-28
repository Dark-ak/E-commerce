
const Message = ({ msg }) => {

    if (msg) {
        return (
            <div class="inset-0 sticky z-50 flex-col float flex justify-center items-center p-5">
                <div class="w-auto p-5 rounded-full bg-orange-600">
                    <p class="text-white text-lg">{msg}</p>
                </div>
            </div>
        )
    }
}

export default Message