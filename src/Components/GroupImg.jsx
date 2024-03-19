const GroupImg = () => {
    return (
        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
                <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                    <span>+5</span>
                </div>
            </div>
        </div>
    );
};

export default GroupImg;