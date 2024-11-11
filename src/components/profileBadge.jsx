import { Avatar } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

export default function ProfileBadge() {
    return (
        <div style={{marginLeft: 50}} className="profile-badge">
            <Dropdown>
                <DropdownTrigger>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
                </DropdownTrigger>
                <DropdownMenu style={{backgroundColor: 'transparent'}} aria-label="Static Actions">
                    <DropdownItem key="new">Profile</DropdownItem>
                    <DropdownItem key="copy">Settings</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                        Log out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
